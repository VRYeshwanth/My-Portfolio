export default function Form() {
    return (
        <form>
            <input type="text" name="name" placeholder="Enter your Name :"/>
            <input type="email" name="email" placeholder="Enter your E-Mail address :" />
            <textarea name="message" placeholder="Enter your message here :"></textarea>
            <button type="submit">Submit</button>
        </form>
    )
}