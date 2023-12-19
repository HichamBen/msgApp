type ChatType = {
   id: string,
   name: string,
   picture: string,
   connected: boolean,
   lastMsg: {
      from?: string,
      content: string,
      status?: "wait" | "onserver" | "arrived" | "viewed"
   },
   time: string
}

export const chats: ChatType[] = [
   {
      id: "A" + Date.now(),
      name: "Mike Doe",
      picture: "/avatars/avatar1.jpeg",
      connected: true,
      lastMsg: {
         content: "Hey How are you?👋️",
         status: "arrived"
      },
      time: "07:40",
   },
   {
      id: "B" + Date.now(),
      name: "example@mail.com",
      picture: "/avatars/avatar5.webp",
      connected: false,
      lastMsg: {
         content: "It's funny😂️😂️😂️",
         status: "wait"
      },
      time: "11:20",
   },
   {
      id: "C" + Date.now(),
      name: "James Bond",
      picture: "/avatars/avatar4.webp",
      connected: true,
      lastMsg: {
         content: "Hi...",
         status: "viewed"
      },
      time: "12:40",
   },
   {
      id: "D" + Date.now(),
      name: "Julia Kate",
      picture: "/avatars/avatar6.jpeg",
      connected: true,
      lastMsg: {
         content: "No news from him!!!",
         status: "onserver"
      },
      time: "12:40",
   },
   {
      id: "E" + Date.now(),
      name: "Anna Bruce",
      picture: "/avatars/avatar2.jpeg",
      connected: true,
      lastMsg: {
         content: "My darling!",
      },
      time: "12:40",
   },
]

export const contacts = [
   {
      id: "A" + Date.now(),
      name: "Mike Doe",
      picture: "/avatars/avatar1.jpeg",
      description: "Hey there 👋️!",
   },
   {
      id: "B" + Date.now(),
      name: "example@mail.com",
      picture: "/avatars/avatar5.webp",
      description: "At gym",
   },
   {
      id: "C" + Date.now(),
      name: "James Bond",
      picture: "/avatars/avatar4.webp",
      description: "😂️😂️😂️",

   },
   {
      id: "D" + Date.now(),
      name: "Julia Kate",
      picture: "/avatars/avatar6.jpeg",
      description: "Time is too short don't forget!",
   },
   {
      id: "E" + Date.now(),
      name: "Anna Bruce",
      picture: "/avatars/avatar2.jpeg",
      description: "I'm using msgApp!"
   },
]

export const calls = [
   {
      id: "A" + Date.now(),
      name: "Mike Doe",
      picture: "/avatars/avatar1.jpeg",
      time: "Just Now",
      type: "voice",

   },
   {
      id: "B" + Date.now(),
      name: "example@mail.com",
      picture: "/avatars/avatar5.webp",
      time: "Yesterday, 23:27",
      type: "video",
      status: "decline",
   },
   {
      id: "C" + Date.now(),
      name: "James Bond",
      picture: "/avatars/avatar4.webp",
      time: "November, 12, 18:07",
      type: "voice",
      status: "answer",
   },
]