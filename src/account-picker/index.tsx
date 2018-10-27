import * as React from 'react'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import MenuItem from '@material-ui/core/MenuItem'

import './styles.css'

export interface Account {
  id: number
  name: string
  phone?: string
  email?: string
}

export interface AccountPickerPropsInterface {
  accounts: Account[] // 可选列表
  selected?: Account // 当前选择的账户
  selectedId?: number // 当前选择的id，优先级低于 selected
  group?: string // 分组字段
  onSelect?: (selected: Account) => void // 选择后回调函数
  onSearch?: (keyword: string) => void // 搜索功能
}

export class AccountPicker extends React.Component<AccountPickerPropsInterface, {}> {
  render (): React.ReactNode {
    return (
      <List
        className='account-picker'
      >
        {this.props.group ? this.renderWithGroup() : this.renderWithoutGroup()}
      </List>
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
    const sortedKeys = Object.keys(groupedAccounts).sort()
    const subGroups = sortedKeys.map(key => ({ key, accounts: groupedAccounts[key] }))
    if (unGroupedAccounts.length) subGroups.push({ key: 'ungrouped', accounts: unGroupedAccounts })

    // render
    return subGroups.map(subGroup => (
      <li key={subGroup.key} className='section'>
        <ul>
          <ListSubheader>{subGroup.key}</ListSubheader>
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
    return (
      <MenuItem
        button={true}
        key={item.id}
        selected={selected}
        onClick={onSelect}
        className={'account' + (selected ? ' selected' : '')}
      >
        <span className='name'>{item.name}</span>
        <span className='account'>{item.phone || item.email}</span>
      </MenuItem>
    )
  }
}
