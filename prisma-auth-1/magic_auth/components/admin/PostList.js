import { 
    List, 
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin'

const PostList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='fName' />
            <TextField source='lName' />
            <TextField source='email' />
            <TextField source='userName' />
        </Datagrid>
    </List>
}

export default PostList