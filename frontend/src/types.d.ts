type description = {
   type: "text" | "image" | "audio" | "video" | "pdf" | "txt" | "other";
   message: string;
   label?: string;
} | undefined;


type UserProps = {
   _id: string,
   username: string,
   email: string,
   description: string,
   picture?: string,
   connected: boolean,
   profileStatus: "all" | "contacts"
}

type MsgProps = {
   _id: string,
   chatId?: string,
   senderId?: string,
   content: {
      type: "text" | "image" | "audio" | "video" | "pdf" | "txt" | "other",
      message: string,
      label?: string
   },
   status?: "waited" | "saved" | "recieved" | "viewed",
   sendAt: string,
}

type ChatsProps = {
   _id: string,
   chatTitle: string,
   isGroup: boolean,
   participants: { participant: UserProps, deletedAt?: string }[];
   groupAdmin?: string,
   lastMsg?: MsgProps
   createdAt?: string
};

type ContactsProps = {
   _id: string,
   statusFromMe: "wait" | "accept" | "block",
   contact: UserProps & { status: "wait" | "accept" | "block" },
}

