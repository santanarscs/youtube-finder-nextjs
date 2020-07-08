import React, {useState, useCallback} from 'react'
import { FiSearch } from 'react-icons/fi'
import { Container } from './styles'

interface SearchProps {
  placeholder: string;
  handleSearch: (term: string) => void
}

const Search: React.FC<SearchProps> = ({placeholder, handleSearch}) => {
  const [search, setSearch] = useState<string>()
  const handleSubmit = useCallback(() => {
    handleSearch(search)
    setSearch('')
  }, [search])
  return (
    <Container>
      <input 
        type="text" 
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
      /> 
      <button onClick={handleSubmit}>
        <FiSearch size={20} />
      </button>
    </Container>
  )
}

export default Search;