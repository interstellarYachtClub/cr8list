const NewCratelist = () => {
  return (
    <div>
      <h1>Create a new cratelist</h1>
      <input type="text" id="cratelistName" required placeholder="Cratelist Name" />
      <input type="checkbox" id="isPublic" placeholder="Public"/>
      <label for="isPublic">Make Public</label>
      <button>Create New Cratelist</button>
    </div>
  )
}

export default NewCratelist;