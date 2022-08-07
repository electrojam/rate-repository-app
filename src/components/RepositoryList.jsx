import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'

import RepositoryItem from './RepositoryItem.jsx'

const RepositoryList = () => {
  const [repositories, setRepositories] = useState(null)

  const fetchRepositories = async () => {
    const response = await globalThis.fetch('http://192.168.1.8:5000/api/repositories')
    const json = await response.json()
    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [])
  
  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList 
        data={repositoriesNodes}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item: repo }) => (
            <RepositoryItem {...repo} />
        )}
    />
  )
}

export default RepositoryList