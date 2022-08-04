import React from 'react'
import { View, Text } from 'react-native'

import repositories from '../data/repositories.js'

const RepositoryList = () => {
  return (
    <View>
      {repositories.map(repo => (
        <View key={repo.id}>
            <Text>Id: {repo.id}</Text>
            <Text>FullName: {repo.fullName}</Text>
            <Text>Description: {repo.description}</Text>
            <Text>Language: {repo.language}</Text>
            <Text>Stars: {repo.stargazersCount}</Text>
            <Text>Forks: {repo.forksCount}</Text>
            <Text>Review: {repo.reviewCount}</Text>
            <Text>Rating: {repo.ratingAverage}</Text>
        </View>
      ))}
    </View>
  )
}

export default RepositoryList