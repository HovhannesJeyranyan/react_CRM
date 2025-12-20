import {
  useGetUsersQuery,
  useAddUserMutation,
} from '../../shared/api/baseApi'

const Users = () => {
  const { data, isLoading } = useGetUsersQuery()
  const [addUser] = useAddUserMutation()

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <button onClick={() => addUser({ name: 'Alex' })}>
        Add
      </button>
    </>
  )
}

export default Users