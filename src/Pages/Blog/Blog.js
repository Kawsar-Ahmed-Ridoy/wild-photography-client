import React from "react";

const Blog = () => {
  return (
    <div className="mb-16 mt-12  max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h2 className="text-center text-4xl font-bold ">Blog</h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="flex justify-around text-center align-middle flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">Difference between SQL and NoSQL</h2>
            <p>
              SQL databases are primarily called as Relational Databases
              (RDBMS); whereas NoSQL database are primarily called as
              non-relational or distributed database. Language – SQL databases
              defines and manipulates data based structured query language
              (SQL). Seeing from a side this language is extremely powerful. SQL
              is one of the most versatile and widely-used options available
              which makes it a safe choice especially for great complex queries.
              But from other side it can be restrictive. SQL requires you to use
              predefined schemas to determine the structure of your data before
              you work with it. Also all of your data must follow the same
              structure. This can require significant up-front preparation which
              means that a change in the structure would be both difficult and
              disruptive to your whole system. A NoSQL database has dynamic
              schema for unstructured data. Data is stored in many ways which
              means it can be document-oriented, column-oriented, graph-based or
              organized as a KeyValue store. This flexibility means that
              documents can be created without having defined structure first.
              Also each document can have its own unique structure. The syntax
              varies from database to database, and you can add fields as you
              go.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">What is JWT, and how does it work?</h2>
            <p>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved. The purpose of using JWT is not to hide data but to
              ensure the authenticity of the data. JWT is signed and encoded,
              not encrypted. JWT is a token based stateless authentication
              mechanism. Since it is a client-side based stateless session,
              server doesn't have to completely rely on a datastore(database) to
              save session information. Header JWT header consists of token type
              and algorithm used for signing and encoding. Algorithms can be
              HMAC, SHA256, RSA, HS256 or RS256. Signature Signature is most
              important part of a JSON Web Token(JWT). Signature is calculated
              by encoding the header and payload using Base64url Encoding and
              concatenating them with a period separator. Which is then given to
              the cryptographic algorithm.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">
              What is the difference between javascript and NodeJS?
            </h2>
            <p>
              1. JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language. As a result, it is used to create
              network-centric applications. It's a networked system made for
              data-intensive real-time applications. If we compare node js vs.
              python, it is clear that node js will always be the preferred
              option. 2. JavaScript is a simple programming language that can be
              used with any browser that has the JavaScript Engine installed.
              Node.js, on the other hand, is an interpreter or execution
              environment for the JavaScript programming language. It requires
              libraries that can be conveniently accessed from JavaScript
              programming to be more helpful. 3. Any engine may run JavaScript.
              As a result, writing JavaScript is incredibly easy, and any
              working environment is similar to a complete browser. Node.js, on
              the other hand, only enables the V8 engine. Written JavaScript
              code, on the other hand, can run in any context, regardless of
              whether the V8 engine is supported.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">
              How does NodeJS handle multiple requests at the same time?
            </h2>
            <p>
              We know NodeJS application is single-threaded. Say, if processing
              involves request A that takes 10 seconds, it does not mean that a
              request which comes after this request needs to wait 10 seconds to
              start processing because NodeJS event loops are only
              single-threaded. The entire NodeJS architecture is not
              single-threaded. How NodeJS handle multiple client requests?
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
