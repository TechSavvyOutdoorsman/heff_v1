import {
    Box,
    Heading,
    Flex
} from '@chakra-ui/react'
import { Admin, Datagrid, Resource, List } from "react-admin"
import { useDataProvider } from '@ra-data-prisma/dataprovider'
import PostList from '../components/admin/PostList'

const App = () => {

    const dataProvider = useDataProvider({
        clientOptions: { uri: process.env.DATABASE_URL }
        // aliasPrefix: "admin" // 👈 set this, if you use a aliasPrefix on your backend as well (recommended)
        // filters: {} // custom filters
        // queryDialect: "nexus-prisma" // customize query dialect, defaults to nexus-prisma,
      })

    return (
        <Admin
        dataProvider={dataProvider}
        >
            <Resource name='users' list={PostList} />
        </Admin>
    )
}

export default App