import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Anirudh Makhana. All Rights Reserved.`,
  author: {
    name: 'Muhammad Ahmad',
    accounts: [
      {
        url: 'https://github.com/anirudhmakhana',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: 'https://twitter.com/makhanaanirudh',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      {
        url: 'https://dev.to/anirudhmakhana',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />
      },
      {
        url: 'https://www.linkedin.com/in/anirudh-m-678284170/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      // {
      //   url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
      //   label: 'Quora Account',
      //   type: 'red',
      //   icon: <FaQuora />
      // },
      {
        url: 'mailto:makhana.anirudh@gmail.com',
        label: 'Mail Anirudh',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
