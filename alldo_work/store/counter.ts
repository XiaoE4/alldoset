import {defineStore} from 'pinia'

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
// 不同网站的user内容不一，所以不设interface

// 对接state的一级接口
interface State_app {
	// 是否登录
	isLogin: AppLogin | AppLoginDefault
	// 用户
	user: AppUser | null
	// 网站主题
	theme: string
	// 网站打开类型 | 默认web网页端
	appState: string | 'android' | 'ios' | 'web'
	// 菜单是否打开
	menuOpen: false | true
}

interface State_blog {
	user: ''
}

interface State_music {
	user: ''
}

interface State_list {
	user: ''
}

interface State_count {
	user: ''
}

// 二级接口
// 登录状态接口
interface AppLogin {
	app: true | false
	blog: true | false
	music: true | false
	list: true | false
	count: true | false
}

// 登录默认全为否
interface AppLoginDefault {
	app: false
	blog: false
	music: false
	list: false
	count: false
}

// 主站用户接口
interface AppUser {
	id: number
	name: string
	email: string
	password: string
}

// 主站state
export let useAppStore = defineStore('appID', {
	state: (): State_app => {
		return {
			isLogin: {app: false, blog: false, music: false, list: false, count: false},
			user: {id: 0, name: '', email: '', password: ''},
			theme: '',
			appState: 'web',
			menuOpen: false
		}
	}
})






interface State {
	userList: UserInfo[]
	user: UserInfo | null
	table: tableInfo
}

export const useStore = defineStore('storeId', {
	state: (): State => {
		return {
			userList: [],
			user: null,
			table: {
				a: '1',
				b: '2',
				c: 3
			}
		}
	},
})

interface UserInfo {
	name: string
	age: number
}

interface tableInfo {
	a: string
	b: string
	c: number
}
