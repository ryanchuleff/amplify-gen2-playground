export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// Enable user signups from the login screen
export const ALLOW_SIGNUPS = false;

// Authorization Role Consts
export const PERCH_CONTROL = 'PERCH_CONTROL';

export const CLIENT_ADMIN = 'CLIENT_ADMIN';
export const CLIENT_SALES = 'CLIENT_SALES';
export const CLIENT_TRAINER = 'CLIENT_TRAINER';
export const CLIENT_CHECKIN = 'CLIENT_CHECKIN';
export const CLIENT_STAFF = [ CLIENT_ADMIN, CLIENT_SALES, CLIENT_TRAINER, CLIENT_CHECKIN ];

export const CLIENT_MEMBER = 'CLIENT_MEMBER';

export const MEMBER_UNASSIGNED = 'UNASSIGNED';

// Top navigation menu structure
export const CLUB_HEADER = 'CLUB';
export const CLUB_NAV_MENU = [
  {
    label: 'Profiles',
    icon: null,
    url: '/_authenticated/profiles',
    items: [
      { label: 'View All Profiles', icon: null, url: '/_authenticated/profiles' },
      { label: 'Onboard Profile', icon: null, url: '/_authenticated/profiles/onboard' },
    ],
  },
  {
    label: 'Transactions',
    icon: null,
    url: '/_authenticated/transactions',
    items: [
      { label: 'View All Transactions', icon: null, url: '/_authenticated/transactions' },
      { label: 'Membership Transactions', icon: null, url: '/_authenticated/transactions?f=members' },
      { label: 'Retail Transactions', icon: null, url: '/_authenticated/transactions?f=retail' },
    ],
  },
  {
    label: 'Schedule',
    icon: null,
    url: '/_authenticated/schedule',
    items: [
      { label: 'View Schedule', icon: null, url: '/_authenticated/schedule' },
      /* { label: 'Add Appointment', icon: null, url: '/schedule/add' }, */
    ],
  },
  {
    label: 'Reports',
    icon: null,
    url: '/_authenticated/reports',
    items: [],
  },
];

export const PERCH_HEADER = 'PERCH';
export const PERCH_NAV_MENU = [
  {
    label: 'Clients',
    icon: null,
    url: '/clients',
    items: [
      { label: 'View All Clients', icon: null, url: '/clients' },
      { label: 'Onboard Client', icon: null, url: '/clients/onboard' },
    ],
  },
  {
    label: 'Transactions',
    icon: null,
    url: '/transactions',
    items: [
      { label: 'View All Transactions', icon: null, url: '/transactions' },
      { label: 'Membership Transactions', icon: null, url: '/transactions?f=members' },
      { label: 'Retail Transactions', icon: null, url: '/transactions?f=retail' },
    ],
  },
  {
    label: 'Reports',
    icon: null,
    url: '/reports',
    items: [],
  },
  {
    label: 'Onboard Client',
    icon: null,
    url: '/clients/onboard',
    items: [],
  },
];

export const MONTHS = [
  {
    value: 'January',
    label: 'January'
  },
  {
    value: 'February',
    label: 'February'
  },
  {
    value: 'March',
    label: 'March'
  },
  {
    value: 'April',
    label: 'April'
  },
  {
    value: 'May',
    label: 'May'
  },
  {
    value: 'June',
    label: 'June'
  },
  {
    value: 'July',
    label: 'July'
  },
  {
    value: 'August',
    label: 'August'
  },
  {
    value: 'September',
    label: 'September'
  },
  {
    value: 'October',
    label: 'October'
  },
  {
    value: 'November',
    label: 'November'
  },
  {
    value: 'December',
    label: 'December'
  }
];


export const MONTHS_ARRAY = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const LOCATION_HOURS = [
  { label: 'Sunday', open: '', close: '' },
  { label: 'Monday', open: '', close: '' },
  { label: 'Tuesday', open: '', close: '' },
  { label: 'Wednesday', open: '', close: '' },
  { label: 'Thursday', open: '', close: '' },
  { label: 'Friday', open: '', close: '' },
  { label: 'Saturday', open: '', close: '' }
];

export const CREDIT_CARDS = [
  { label: 'Visa', included: false },
  { label: 'MasterCard', included: false },
  { label: 'Discover', included: false },
  { label: 'American Express', included: false },
];

export const AGREEMENT_TYPE = {
  Trial: { label: 'Trial Agreement', value: 'TRIAL' },
  Primary: { label: 'Primary Agreement', value: 'PRIMARY' },
  Addon: { label: 'Addon Agreement', value: 'ADDON' },
};

export const AGREEMENT_FREQUENCY = {
  Annual: { label: 'Annually', value: 'ANNUALLY' },
  Month: { label: 'Monthly', value: 'MONTHLY' },
  Week: { label: 'Weekly', value: 'WEEKLY' },
  Day: { label: 'Daily', value: 'DAILY' },
};

export const INTERVAL_FREQUENCY = [
  { label: 'Monthly', value: 'MONTHLY' },
  { label: 'Weekly', value: 'WEEKLY' },
  { label: 'Daily', value: 'DAYS' },
];

export const WEEK_DAYS = [
  { label: 'All Days', value: 0 },
  { label: 'Sunday', value: 1 },
  { label: 'Monday', value: 2 },
  { label: 'Tuesday', value: 3 },
  { label: 'Wednesday', value: 4 },
  { label: 'Thursday', value: 5 },
  { label: 'Friday', value: 6 },
  { label: 'Saturday', value: 7 },
];

export const STATE_LIST = [{label:'Alabama',value:'AL'},{label:'Alaska',value:'AK'},{label:'Arizona',value:'AZ'},{label:'Arkansas',value:'AR'},{label:'California',value:'CA'},{label:'Colorado',value:'CO'},{label:'Connecticut',value:'CT'},{label:'Delaware',value:'DE'},{label:'Florida',value:'FL'},{label:'Georgia',value:'GA'},{label:'Hawaii',value:'HI'},{label:'Idaho',value:'ID'},{label:'Illinois',value:'IL'},{label:'Indiana',value:'IN'},{label:'Iowa',value:'IA'},{label:'Kansas',value:'KS'},{label:'Kentucky',value:'KY'},{label:'Louisiana',value:'LA'},{label:'Maine',value:'ME'},{label:'Maryland',value:'MD'},{label:'Massachusetts',value:'MA'},{label:'Michigan',value:'MI'},{label:'Minnesota',value:'MN'},{label:'Mississippi',value:'MS'},{label:'Missouri',value:'MO'},{label:'Montana',value:'MT'},{label:'Nebraska',value:'NE'},{label:'Nevada',value:'NV'},{label:'New Hampshire',value:'NH'},{label:'New Jersey',value:'NJ'},{label:'New Mexico',value:'NM'},{label:'New York',value:'NY'},{label:'North Carolina',value:'NC'},{label:'North Dakota',value:'ND'},{label:'Ohio',value:'OH'},{label:'Oklahoma',value:'OK'},{label:'Oregon',value:'OR'},{label:'Pennsylvania',value:'PA'},{label:'Rhode Island',value:'RI'},{label:'South Carolina',value:'SC'},{label:'South Dakota',value:'SD'},{label:'Tennessee',value:'TN'},{label:'Texas',value:'TX'},{label:'Utah',value:'UT'},{label:'Vermont',value:'VT'},{label:'Virginia',value:'VA'},{label:'Washington',value:'WA'},{label:'West Virginia',value:'WV'},{label:'Wisconsin',value:'WI'},{label:'Wyoming',value:'WY'}]