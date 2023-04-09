import './index.css'

const HistoryListView = props => {
  const {item, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const buttonClicked = () => {
    console.log(id)
    deleteItem(id)
  }

  return (
    <li className="main-container">
      <p className="time-accessed"> {timeAccessed} </p>
      <div className="logo-title-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <div className="title-domain-container">
          <p className="title">{title} </p>
          <p className="url-title"> {domainUrl} </p>
        </div>
        <button
          id="delete"
          type="button"
          onClick={buttonClicked}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryListView
