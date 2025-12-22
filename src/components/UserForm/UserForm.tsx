import {
  useGetUsersQuery,
  useAddUserMutation,
} from '../../shared/api/baseApi'

const UserForm = () => {
  const { data, isLoading } = useGetUsersQuery()
  const [addUser] = useAddUserMutation()

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <ul>
        {data?.map((u) => (
          <li key={u.id}>{u.uName}</li>
        ))}
      </ul>
      <button onClick={() => addUser({ uName: 'Alex' })}>
        Add
      </button>
    </div>
  )
}

export default UserForm