import './Blogs.css';
import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div>
      <Row xs={1} md={1} className='mx-auto'>
    <Col>
      <Card className='m-5 shadow-lg'>
        <Card.Body>
          <Card.Title className='text-primary'>Contex API</Card.Title>
          <Card.Text className='text-start blog-para'>
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
          <br/>
          React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='m-5 shadow-lg'>
        <Card.Body>
          <Card.Title className='text-primary'>Semantic Tag</Card.Title>
          <Card.Text className='text-start blog-para'>
          Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.
          <br/>
          By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>

    </div>
  );
};

export default Blogs;