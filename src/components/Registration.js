import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';


const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Hint Text"
    /><br />
    <br />
    <TextField
      hintText="The hint text can be as long as you want, it will wrap."
    /><br />
    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Fixed Floating Label Text"
      floatingLabelFixed={true}
    /><br />
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br />
    <TextField
      hintText="MultiLine with rows: 2 and rowsMax: 4"
      multiLine={true}
      rows={2}
      rowsMax={4}
    /><br />
    <TextField
      hintText="Message Field"
      floatingLabelText="MultiLine and FloatingLabel"
      multiLine={true}
      rows={2}
    /><br />
    <TextField
      hintText="Full width"
      fullWidth={true}
    />
  </div>
); 
class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }



  componentDidMount() {
   var config = {
        headers: {'Authorization': "bearer" + "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJzdGVsIiwiaXNzIjoiYmJnby5nciIsIlJvbGVzIjpbIkdVSURFIl0sImV4cCI6MTUwNjI3OTQ3MSwiaWF0IjoxNTA2Mjc1ODcxfQ.EeuFA_gg44wkcQvcMnRzuS25HJB0ZAiyBz7sPeHxg-CKXqR4LbQyASVG6Ts3zzBcNx9cZhEkKt1iIgzF46Oj_-SPpBvO16DglfUx6PYoSRPah2HTM8utrZoIlhTDpB484jdoRj0QSRVFZVKLr6cYfs6w2EIkbebkRBAPs_ujbaW88cLCfZxrOMg5Utaw49af-84931mIXl3ADQJHbw3-LRdnj95BqNOiFfRu9GwaQWErK7MRTRbJ8QkpucGvTvvO-ir511LUMkwfaGpUGbeu5tPUOyXZoP3CxMz-mqiGdpJFkrLYVZOj92rpAa3xcQ1pEhlxu4J2kdSqCIwQjtJ2EQ"}
   };

   var bodyParameters = {
       "key": 22
   }
    axios.get(`https://147.102.23.230:4046/gocore/user/private/info`)
      
      .then(res => {
        console.log(res)
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div>
      <TextFieldExampleSimple />
        <h1>{`/r/${this.props.subreddit}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default FetchDemo;