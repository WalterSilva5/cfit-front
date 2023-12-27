export type Exercise = {
	id?: number
	name: string
	videoUrl: string
	imageUrl: string
	description: string
	muscleGroupId: number
	createdAt?: Date
	updatedAt?: Date | null
	deletedAt?: Date | null
}