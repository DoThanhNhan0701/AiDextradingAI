import iconCard from '@/public/icons/layout/dashboard.svg';

import iconWallet from '@/public/icons/common/walletconnect.svg';
import iconCoinBase from '@/public/icons/common/coinbase-logo.svg';
import iconMetamask from '@/public/icons/common/metamask-icon.svg';

const dataDashboard = [
  {
    icon: iconCard,
    name: 'Balance',
    money: '10,0000,00 USDT',
    color: '#12bf24',
  },
  {
    icon: iconCard,
    name: 'Deposit',
    money: '10,0000,00 USDT',
    color: '#6c757d',
  },
  {
    icon: iconCard,
    name: 'Staking',
    money: '10,0000,00 USDT',
    color: '#e72e7a',
  },
  {
    icon: iconCard,
    name: 'Customer',
    money: '10,0000,00 USDT',
    color: '#32bfff',
  },
];

const dataDashboardV = [
  {
    icon: iconCard,
    name: 'Transfer',
    money: '10,0000,00 USDT',
    color: '#cc7429',
  },
  {
    icon: iconCard,
    name: 'Profit',
    money: '10,0000,00 USDT',
    color: '#e72e2e',
  },
  {
    icon: iconCard,
    name: 'Commision',
    money: '10,0000,00 USDT',
    color: '#ffcb32',
  },
];

const dataCharDashboard = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const dataConnetWallet = [
  {
    icon: iconMetamask,
    key: 'METAMASK',
    name: 'Metamask',
  },
  {
    icon: iconCoinBase,
    key: 'COINBASE_WALLET',
    name: 'Coinbase Wallet',
  },
  {
    icon: iconWallet,
    key: 'WALLET_CONNECT',
    name: 'Wallet Connect',
  },
];

export { dataCharDashboard, dataDashboard, dataDashboardV, dataConnetWallet };
