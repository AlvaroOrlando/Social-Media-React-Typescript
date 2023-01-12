import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

//author: { avatar_url:"", name: "", role: "" }
//publishedAt: Date
//content: String

const posts = [
  {
    id:1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/92760374?v=4',
      name: 'Álvaro Orlando',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala, galera!', },
      { type: 'paragraph', content: 'Vitae recusandae maxime corrupti asperiores nesciunt, perspiciatis officia sapiente? Nostrum obcaecati', },
      { type: 'link', content: 'www.clubedoscompositores.com.br' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: '',
      name: 'Bruno Orlando',
      role: 'Brother',
    },
    content: [
      { type: 'paragraph', content: 'Boa!', },
      { type: 'paragraph', content: 'Vitae recusandae maxime corrupti asperiores nesciunt, perspiciatis officia sapiente? Nostrum obcaecati', },
      { type: 'link', content: 'www.piratexcorp.com' },
    ],
    publishedAt: new Date('2022-08-04 14:00:00'),
  },
];

export function App() {

  return (
   <div>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        { 
          posts.map(post =>{
            return ( 
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
             />
            )
          })
        }
      </main>
     </div>
   </div>
  )
}


