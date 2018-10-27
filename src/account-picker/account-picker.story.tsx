import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { AccountPicker, Account, AccountPickerPropsInterface } from './index'

const accounts: Account[] = [
  { id: 1, name: '黑老师', phone: '15312345678', email: 'heilaoshi@innobuddy.com' },
  { id: 2, name: '白老师', phone: '13512345678' },
  { id: 3, name: '红老师', email: 'honglaoshi@innobuddy.com' },
  { id: 4, name: '123老师', email: '123@innobuddy.com' },
  { id: 5, name: '名字非常长的老师', email: 'mingzihenchangdelaoshi@innobuddy.com' },
  { id: 6, name: '李校长', email: 'lixiaozhang@innobuddy.com' },
  { id: 7, name: '小丸子', phone: '12345678910' },
  { id: 8, name: '小灰灰', phone: '12345678911' },
  { id: 9, name: '诸葛亮', email: 'zhugewuhou@han.dynasty' },
  { id: 10, name: '李白', email: 'libai@tang.dynasty' },
  { id: 11, name: '苏轼', email: 'libai@song.dynasty' },
  { id: 12, name: '白居易', email: 'dabuyi@changan.city' },
  { id: 13, name: '孙权', email: 'sunshiwan@wu.dynasty' },
  { id: 14, name: '慢羊羊', email: 'cunzhang@qingqing.prairie' }
]

const handleSelect = (account: Account) => {
  alert(`select ${account.name}`)
}

const handleSearch = (keyword: string) => {
  alert(`search ${keyword}`)
}

storiesOf('AccountPicker', module)
  .add('groupByName', withInfo({ inline: true })(() => (
      <AccountPicker
        accounts={accounts}
        group='name'
        onSearch={handleSearch}
        onSelect={handleSelect}
      />
    )))
    .add('without group', withInfo({ inline: true })(() => (
      <AccountPicker
        accounts={accounts}
        onSearch={handleSearch}
        onSelect={handleSelect}
      />
    )))
    .add('default selected', withInfo({ inline: true })(() => (
      <AccountPicker
        accounts={accounts}
        onSelect={handleSelect}
        onSearch={handleSearch}
        selectedId={2}
      />
    )))
