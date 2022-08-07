import { useEffect, useState } from 'react'

const useRepositories = () => {
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
  
      return {repositories: repositoriesNodes  }
    }

    export default useRepositories