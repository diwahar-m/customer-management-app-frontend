const PersonalDetails = (props) => {
    const {customerData} = this.props
    const {firstName, lastName, gender, dob} = customerData

    return(
        <div>
            <div>
                <p>First Name</p>
                <p>{firstName}</p>
            </div>
            <div>
                <p>Last Name</p>
                <p>{lastName}</p>
            </div>
            <div>
                <p>Gender</p>
                <p>{gender}</p>
            </div>
            <div>
                <p>Date of Birth</p>
                <p>{dob}</p>
            </div>
        </div>
    )
}

export default PersonalDetails