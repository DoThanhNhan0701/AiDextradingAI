const dataMenu = [
  {
    type: 'Deposit',
    icon: '/icons/menu/deposit-icon.svg',
    name: 'Deposit',
    link: '/deposit',
  },
  {
    type: 'Withdrawal',
    icon: '/icons/menu/withdrawal-icon.svg',
    name: 'Withdrawal',
    link: '/withdrawal',
  },
  {
    type: 'Staking',
    icon: '/icons/menu/staking-icon.svg',
    name: 'Staking',
    link: '/apps/staking',
  },
  {
    type: 'Swap',
    icon: '/icons/menu/swap-icon.svg',
    name: 'Swap',
    link: '/swap',
  },
  {
    type: 'Transfer',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'Transfer',
    link: '/transfer',
  },
  {
    type: 'Mining',
    icon: '/icons/menu/mining-icon.svg',
    name: 'Mining',
    link: '/mining',
  },
];

const dataMenuActivity = [
  {
    type: 'Referral',
    icon: '/icons/menu/referral-icon.svg',
    name: 'Referral',
    link: '/referral',
  },
  {
    type: 'Withdraw',
    icon: '/icons/menu/withdraw-icon.svg',
    name: 'Withdraw',
    link: '/withdraw',
  },
  {
    type: 'Deposit',
    icon: '/icons/menu/deposit-icon.svg',
    name: 'Deposit',
    link: '/deposit',
  },
  {
    type: 'Staking',
    icon: '/icons/menu/staking-icon.svg',
    name: 'Staking',
    link: '/staking',
  },
  {
    type: 'Commission',
    icon: '/icons/menu/commission-icon.svg',
    name: 'Commission',
    link: '/commission',
  },
  {
    type: 'Profit',
    icon: '/icons/menu/profit-icon.svg',
    name: 'Profit',
    link: '/profit',
  },
  {
    type: 'USDT',
    icon: '/icons/menu/profit-icon.svg',
    name: 'USDT',
    link: '/usdt',
  },
  {
    type: 'Tokent',
    icon: '/icons/menu/profit-icon.svg',
    name: 'Tokent',
    link: '/tokent',
  },
  {
    type: 'VBL',
    icon: '/icons/menu/icon4.svg',
    name: 'VBL',
    link: '/vbl',
  },
  {
    type: 'USDT',
    icon: '/icons/menu/icon3.svg',
    name: 'USDT',
    link: '/usdt',
  },
  {
    type: 'Transfer',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'Transfer',
    link: '/transfer',
  },
  {
    type: 'Transfer',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'Transfer',
    link: '/transfer',
  },
];

const dataMenuFooter = [
  {
    type: 'Home',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'Home',
    link: '/apps/home',
  },
  {
    type: 'Services',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'Services',
    link: '/apps/services',
  },
  {
    type: 'Farms',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'Farms',
    link: '/apps/staking',
    children: [
      {
        type: 'Farm',
        name: 'Farm',
        link: '/apps/staking',
        icon: '/icons/common/tree.svg',
      },
      {
        type: 'Member Team',
        name: 'Member Team',
        link: '/apps/member-team',
        icon: '/icons/common/connection.svg',
      },
    ],
  },

  {
    type: 'Transaction',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'Transaction',
    link: '/apps/transaction',
  },
  {
    type: 'History',
    icon: '/icons/menu/transfer-icon.svg',
    name: 'History',
    link: '/apps/history',
  },
];

const dataMenuHome = [
  {
    type: 'Total Profit',
    icon: '/icons/menu/deposit-icon.svg',
    name: 'Total Profit',
    total: '10.000',
    color: '#fff',
    link: '/deposit',
  },
  {
    type: 'Total Referral',
    icon: '/icons/menu/swap-icon.svg',
    name: 'Total Referral',
    total: '10.000',
    color: '#fff',
    link: '/swap',
  },

  {
    type: 'Total Limit',
    icon: '/icons/menu/withdrawal-icon.svg',
    name: 'Total Limit',
    total: '10.000',
    color: '#fff',
    link: '/apps/staking',
  },
  {
    type: 'Left Team',
    icon: '/icons/menu/leaf-icon_V1.svg',
    name: 'Left Team',
    total: '100',
    color: '#fff',
    link: '/transfer',
  },
  {
    type: 'Total Pool',
    icon: '/icons/menu/staking-icon.svg',
    name: 'Total Pool',
    total: '10.000',
    color: '#fff',
    link: '/withdrawal',
  },
  {
    type: 'Right Team',
    icon: '/icons/menu/leaf-icon_V2.svg',
    name: 'Right Team',
    total: '100',
    color: '#fff',
    link: '/mining',
  },
];

const dataMenuServices = [
  {
    type: ' Deposit',
    icon: '/icons/menuv2/bank-icon.svg',
    name: ' Deposit',
    link: '/apps/services/deposit?tab=deposit',
  },
  {
    type: ' Swap',
    icon: '/icons/menuv2/swap-icon.svg',
    name: ' Swap',
    link: '/apps/services/swap',
  },

  {
    type: 'Withdrawal',
    icon: '/icons/menuv2/withdrawal-icon2.svg',
    name: 'Withdrawal',
    link: '/apps/services/deposit?tab=withdrawal',
  },
  {
    type: 'Transfer',
    icon: '/icons/menuv2/transfer-icon.svg',
    name: 'Transfer',
    link: '/apps/services/deposit?tab=transfer',
  },
  {
    type: 'Staking',
    icon: '/icons/menuv2/bag-icon.svg',
    name: 'Staking',
    link: '/apps/services/staking',
  },
  {
    type: 'Token Minter',
    icon: '/icons/menuv2/farm-icon.svg',
    name: 'Token Minter',
    link: '/apps/services?tab=minter',
  },
];

export {
  dataMenu,
  dataMenuActivity,
  dataMenuFooter,
  dataMenuHome,
  dataMenuServices,
};
