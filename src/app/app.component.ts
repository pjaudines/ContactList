import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Post{
  title:string;
  content:string;
}

interface PostId extends Post{
id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  address: string;
  firstname: string;
  lastname:string;
  mobile: string;
  phonenumber:number;
  email:string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    //this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map( a =>{
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return{ id, data};
        })
      })

  }

  addPost(){

    this.afs.collection('posts').add({'address': this.address, 'firstname': this.firstname,'lastname': this.lastname,
    'mobile': this.mobile, 'phonenumber': this.phonenumber, 'email': this.email });
   

  }

  getPost(postId){
    this.postDoc = this.afs.doc('post/'+postId);
    this.post = this.postDoc.valueChanges();

  }

  deletePost(postId){
    this.afs.doc('posts/'+postId).delete();
  }
}
