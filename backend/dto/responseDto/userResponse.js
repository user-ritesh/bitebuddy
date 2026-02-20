const userResponse = (user) => {
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        cartData: user.cartData
    }
}
export default userResponse;