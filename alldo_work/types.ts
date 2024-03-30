export interface AllDo {
	name?: string
	id: number
	credits?: {
		cast: User[]
	}
}
export interface User {
	id:number
	name:string
	age: number
	sex?: number
	photos:{
		profiles: Photo[]
	}
}
export interface Photo {
	aspect_ratio: number
	width: number
	height: number
	iso_639_1: string
	file_path: string
	vote_average: number
	vote_count: number
}