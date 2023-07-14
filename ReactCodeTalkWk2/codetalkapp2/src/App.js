
// by importing the button component we can now render it on our react app
import Button from './button' 
import Avatar from './avatar';

// definining the variable user with the props data: name, imageURL, imageSize. This data is passed to the props inside the Avatar component
const user = {
  name: 'Christopher Robin',
  imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg&tbnid=nS1rvO2HUn5IaM&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up&docid=0KPOynmmJAlCxM&w=765&h=573&q=christopher%20robin&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ',
  imageSize: 90,
};

function App() {
  return (
    <div>
      <Button title="Add to cart" />
      {/* when the button component prop title is passed it renders a button labeled Add to Cart */}
      <Button title="Find out more" />
      {/* The second time we render the button component, a second button appears labeled Find Out More */}

      {/* renders the Avatar component with the data of the user that was defined above */}
      {/* The curly braces are useful because they let us access the javascript expressions and variables we define in jsx code. */}
      <Avatar user={user} />

    </div>
  );
}

export default App;

// Props are different from state because props are read only and cannot be changed. 
// When state is used the components state is changed/modified whenever it is re-rendered.