const IsValidEmail = (value) => {
    var re = /^[^@]+@[^@]+$/
    return re.test(value)
}

export default IsValidEmail