import * as React from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import MenuItem from '@material-ui/core/MenuItem'
import InputBase from '@material-ui/core/InputBase'
import Icon from '../icon'

import './styles.css'

export interface Account {
  id: number
  name: string
  phone?: string
  email?: string
  organizationId: number
}

export interface AccountPickerPropsInterface {
  accounts: Account[] // 可选列表
  currentOrganizationId: number // 当前站点id
  selected?: Account // 当前选择的账户
  selectedId?: number // 当前选择的id，优先级低于 selected
  group?: string // 分组字段
  onSelect?: (selected: Account) => void // 选择后回调函数
  onSearch?: (keyword: string) => void // 搜索功能
}

export class AccountPicker extends React.Component<AccountPickerPropsInterface, {}> {
  render (): React.ReactNode {
    const handleSearch = (event: any) => { this.props.onSearch && this.props.onSearch(event.target.value) }
    return (
      <div className='account-picker'>
        <div className='account-search'>
          <div>
            <Icon type='search' />
            <InputBase
              placeholder='搜索'
              // onBlur={handleSearch}
              onChange={handleSearch}
              className='search'
            />
          </div>
        </div>
        <List
          className='account-list'
        >
          {this.props.group ? this.renderWithGroup() : this.renderWithoutGroup()}
        </List>
      </div>
    )
  }

  renderWithGroup (): React.ReactNode {
    const { accounts, group } = this.props
    const groupedAccounts: {[key: string]: Account[]} = {}
    const unGroupedAccounts: Account[] = []

    // group by first character of given group field
    for (const account of accounts) {
      let key
      if (typeof account[group as string] === 'string') {
        key = account[group as string][0]
      }
      if (key) {
        groupedAccounts[key] = groupedAccounts[key] || []
        groupedAccounts[key].push(account)
      } else {
        unGroupedAccounts.push(account)
      }
    }

    // sort and create subGroups
    let sortedKeys = Object.keys(groupedAccounts)
    try {
      sortedKeys = sortedKeys.sort((a, b) => a.localeCompare(b, 'zh-Hans-CN', { sensitivity: 'accent' }))
    } catch (error) {
      // do nothing
    }
    const subGroups = sortedKeys.map(key => ({ key, accounts: groupedAccounts[key] }))
    if (unGroupedAccounts.length) subGroups.push({ key: 'ungrouped', accounts: unGroupedAccounts })

    // render
    return subGroups.map(subGroup => (
      <li key={subGroup.key} className='section'>
        <ul>
          <ListSubheader className='list-header'>{subGroup.key}</ListSubheader>
          {subGroup.accounts.map(account => this.renderAccount(account))}
        </ul>
      </li>
    ))
  }

  renderWithoutGroup (): React.ReactNode {
    const { accounts } = this.props
    return accounts.map(account => this.renderAccount(account))
  }

  renderAccount (item: Account): React.ReactNode {
    const selected = (item === this.props.selected) || (item.id === this.props.selectedId)
    const onSelect = () => { this.props.onSelect && this.props.onSelect(item) }
    const { currentOrganizationId } = this.props
    return (
      <MenuItem
        button={true}
        key={item.id}
        selected={selected}
        onClick={onSelect}
        className={'account' + (selected ? ' selected' : '')}
      >
        <p>
          <span className='name'>{item.organizationId !== currentOrganizationId ? '(跨)' : ''}{item.name}</span>
          {/* <span className='account'>{item.phone || item.email}</span> */}
        </p>
      </MenuItem>
    )
  }
}
