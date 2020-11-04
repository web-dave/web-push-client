export class MsgDto {
  options: {
    vapidDetails: {
      subject: string;
      publicKey: string;
      privateKey: string;
    };
  };
  pushSubscription: {
    endpoint: string;
    keys: {
      p256dh: string;
      auth: string;
    };
  };
  payload: {
    notification: {
      title: string;
      body: string;
      icon: string;
    };
  };
}

// const d: MsgDto = {
//   payload: {
//     notification: {
//       title: 'Moin Push',
//       body: 'New Post available!',
//       icon: 'assets/icon-72x72.png',
//     },
//   },
//   pushSubscription: {
//     endpoint:
//       'https://fcm.googleapis.com/fcm/send/c-fvSLoci2k:APA91bHPLtBhMIbuRxtIhbnwbHotE0gLkHIrAiTxd3ZWqcJQZTOx0nFw5zNMHMJmlzdD2I8ZZLmWnKNsAEZ_AoW9B6ANmLbzkq5JU7Qhix2oY7ncUfkhHqpLmdNNz0rPzA5ebTy7nRBL',
//     keys: {
//       auth: 'NQPTyZ-BzvZEv7_NfDvK5Q',
//       p256dh:
//         'BE4ZEAQ4iX5HmTqP6DjcRy6GFe-kOf7Z6Hksa5XgDk48Hnmt4OXcAQy6mAh0EK4K_INoOKq05L001nv8fKD4vk4',
//     },
//   },
//   options: {
//     vapidDetails: {
//       subject: 'https://webdave.de',
//       privateKey: 'EVZd2KkCY4jJZYmemevS2zCSpn3QZCL1M8RpfTWESK8',
//       publicKey:
//         'BFvQSp2BtR0wKraFZcoO1rXGMMflM9uLEc-14LNjri9DP_WtQi82qI5FZSjDIaIxeeF3HcRBYRFg7Y9js4RXJqE',
//     },
//   },
// };
