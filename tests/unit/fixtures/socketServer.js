export default {
  response: {
    INSERT: {
      type: 'INSERT',
      schema: 'mydb',
      table: 'mytable',
      affectedRows: [
        {
          after: {
            id: 4
          }
        }
      ],
      affectedColumns: [
        'id'
      ],
      timestamp: 1530985873000,
      nextPosition: 2199
    },
    UPDATE: {
      type: 'UPDATE',
      schema: 'mydb',
      table: 'mytable',
      affectedRows: [
        {
          after: {
            id: 5
          },
          before: {
            id: 4
          }
        }
      ],
      affectedColumns: [
        'id'
      ],
      timestamp: 1530985930000,
      nextPosition: 2463
    },
    UPDATE_EMPTY_PROPERTY: {
      type: 'UPDATE',
      schema: 'mydb',
      table: 'mytable',
      affectedRows: [
        {
          after: {
            id: 5,
            name: null,
          },
          before: {
            id: 4,
            name: null,
          }
        }
      ],
      affectedColumns: [
        'id'
      ],
      timestamp: 1530985930000,
      nextPosition: 2463
    },
    DELETE: {
      type: 'DELETE',
      schema: 'mydb',
      table: 'mytable',
      affectedRows: [
        {
          before: {
            id: 5
          }
        }
      ],
      affectedColumns: [
        'id'
      ],
      timestamp: 1530985970000,
      nextPosition: 2721
    }
  }
}