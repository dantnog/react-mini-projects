export type TaskItemProps = {
  id: number
  name: string 
  start?: string
  end?: string
  done: boolean

  removeTask?: Function
  setDone?: Function
}