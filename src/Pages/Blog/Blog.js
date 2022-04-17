import React from "react";
import { Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-center text-primary">
        Difference between Authentication and Authorization
      </h2>
      <h3>
        Authentication is the process of verifying who is someone. onthe
        ortherhand authorization is the process of verifiying what specific
        application file or data that user submit for acess.
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Authentication</th>
            <th>Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>It is the process of verifying the identity of a user.</td>
            <td>Authorization determines what resources a user can access.</td>
         
          </tr>
          <tr>
            <td>It always proceeds to authorization</td>
            <td>It is the process of allowing an authenticated user access to resources.</td>
            
          </tr>
          <tr>
            <td>Authentication is visible to and partially changeable by the user.</td>
            <td>Authorization is not visible to or changeable by the user.</td>
          </tr>
        </tbody>
      </Table>
      <h2 className="text-center text-primary">
      Why are you using firebase?
      </h2>
      <h3>
      Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. 
      </h3>
      <h2 className="text-center text-primary">
      What other options do you have to implement authentication?
      </h2>
      <h3>
          1.Auth0
          2.Okta
          3.Passport
          4.Keycloak
      </h3>
      <h2 className="text-center text-primary">
      What other services does firebase provide other than authentication
      </h2>
      <h3>
        This service list which provide firebase with authentication
        1.Cloud Firestore
        2.Cloud Functions
        3.Hosting
        4.Cloud Storage
        5.Google Analytics
        6.Predictions
        7.Cloud Messaging
        8.Dynamic Links
        9.Remote Config
      </h3>
    </div>
  );
};

export default Blog;
