
function TodoBodyTitle() {
    const titles = ['Items', 'Status', 'Action']
    return (
        <thead>
            <tr>
                {titles.map((title, index) => 
                    <th key = {index}>
                        { title }
                    </th>
                )}
            </tr>
        </thead>
    )
}

export default TodoBodyTitle