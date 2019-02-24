import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { bibleApi } from '../apis/bible'
import LoaderVerses from '../components/Loaders/Verses'

const BlockQuote = styled.blockquote`
  max-width: ${props => props.theme.maxWidthText};
`

class Quote extends Component {
  state = {
    isLoading: false,
    isError: false,
    data: {},
    bookId: 'de4e12af7f28f599-01',
    bookList: [],
    verses: '',
  }

  static propTypes = { input: PropTypes.object.isRequired }

  componentDidMount() {
    const { input } = this.props
    const { text } = input.primary.quote
    this.setState({ verses: text })
    this.fetchVerses(text)
    this.getBibleBookList()
  }

  componentWillUnmount() {
    const { isLoading, isError } = this.state
    if (isLoading || isError) {
      this.setState({
        isLoading: false,
        isError: false,
      })
    }
  }

  getBibleBookList = async () => {
    try {
      const list = (await bibleApi()()).data.data.filter(book => book.language.id === 'eng')
      this.setState({ bookList: _.uniqBy(list, 'dblId') })
    } catch (error) {
      console.log(error)
    }
  }

  fetchVerses = async verses => {
    const { bookId } = this.state
    try {
      this.setState({ isLoading: true })
      const { data } = await bibleApi(bookId).get(`/passages/${verses}`)
      this.setState({ data: data.data })
    } catch (error) {
      this.setState({ isError: true })
    } finally {
      this.setState({ isLoading: false })
    }
  }

  handleSetBookId = e => {
    const { verses } = this.state
    if (e.target.value) {
      this.setState({
        bookId: e.target.value,
      })
      this.fetchVerses(verses)
    }
  }

  render() {
    const { data, isLoading, bookList, bookId } = this.state
    if (isLoading) return <LoaderVerses />
    return [
      <h2 key="chapter">{data.reference.split(':')[0]}</h2>,
      <BlockQuote key="quite">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </BlockQuote>,
      <div key="bookId">
        <select onChange={this.handleSetBookId} value={bookId}>
          {bookList.map(book => (
            <option value={book.id} key={book.id}>
              {book.name}
            </option>
          ))}
        </select>
      </div>,
      <p key="copyright">{data.copyright || ''}</p>,
    ]
  }
}

export default Quote
