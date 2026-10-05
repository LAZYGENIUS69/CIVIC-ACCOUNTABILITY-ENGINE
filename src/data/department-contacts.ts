export interface ContactDetails {
  department: string;
  email: string | null;
  phone: string;
  whatsapp: string | null;
  portal: string;
  portalName: string;
  address: string;
}

export const DEPARTMENT_CONTACTS: Record<string, Record<string, ContactDetails>> = {
  bangalore: {
    pothole: {
      department: "BBMP Roads Department",
      email: "bbmp.grievance@bbmp.gov.in",
      phone: "1533",
      whatsapp: "919480685700",
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "N.R Square, Bengaluru, Karnataka 560002"
    },
    streetlight: {
      department: "BESCOM",
      email: "cgm.op@bescom.org",
      phone: "1912",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "K.R. Circle, Bangalore 560001"
    },
    water: {
      department: "BWSSB",
      email: "md@bwssb.co.in",
      phone: "1916",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "Cauvery Bhavan, Bangalore 560009"
    },
    garbage: {
      department: "BBMP Solid Waste Management",
      email: "bbmp.grievance@bbmp.gov.in",
      phone: "1533",
      whatsapp: "919480685700",
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "N.R Square, Bengaluru, Karnataka 560002"
    },
    encroachment: {
      department: "BBMP Enforcement",
      email: "bbmp.grievance@bbmp.gov.in",
      phone: "1533",
      whatsapp: "919480685700",
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "N.R Square, Bengaluru, Karnataka 560002"
    }
  },

  mumbai: {
    pothole: {
      department: "BMC Roads Department",
      email: "nodalofficer.mcrm@mcgm.gov.in",
      phone: "1916",
      whatsapp: "918999228999",
      portal: "https://portal.mcgm.gov.in",
      portalName: "MyBMC Portal",
      address: "Mahanagarpalika Marg, Mumbai 400001"
    },
    streetlight: {
      department: "MSEDCL Mumbai",
      email: "helpdesk@mahadiscom.in",
      phone: "1912",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "Prakashgad, Bandra East, Mumbai 400051"
    },
    water: {
      department: "MCGM Hydraulic Department",
      email: "nodalofficer.mcrm@mcgm.gov.in",
      phone: "1916",
      whatsapp: "918999228999",
      portal: "https://portal.mcgm.gov.in",
      portalName: "MyBMC Portal",
      address: "Mahanagarpalika Marg, Mumbai 400001"
    },
    garbage: {
      department: "BMC Solid Waste Management",
      email: "cleanmumbai.report@gmail.com",
      phone: "1916",
      whatsapp: "918999228999",
      portal: "https://portal.mcgm.gov.in",
      portalName: "MyBMC Portal",
      address: "Mahanagarpalika Marg, Mumbai 400001"
    },
    encroachment: {
      department: "BMC Encroachment Department",
      email: "nodalofficer.mcrm@mcgm.gov.in",
      phone: "1916",
      whatsapp: "918999228999",
      portal: "https://portal.mcgm.gov.in",
      portalName: "MyBMC Portal",
      address: "Mahanagarpalika Marg, Mumbai 400001"
    }
  },

  delhi: {
    pothole: {
      department: "PWD Delhi",
      email: "complaint@pwddelhi.com",
      phone: "1908",
      whatsapp: "918130188222",
      portal: "https://pwdsewa.pwddelhi.gov.in",
      portalName: "PWD Sewa Portal",
      address: "MSO Building, I.P. Estate, New Delhi 110002"
    },
    streetlight: {
      department: "MCD Delhi",
      email: "mcd-ithelpdesk@mcd.nic.in",
      phone: "155305",
      whatsapp: null,
      portal: "https://mcdonline.nic.in",
      portalName: "MCD Portal",
      address: "Town Hall, Chandni Chowk, New Delhi 110006"
    },
    water: {
      department: "Delhi Jal Board",
      email: "ceo-djb@nic.in",
      phone: "1916",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "Varunalaya, New Delhi 110002"
    },
    garbage: {
      department: "MCD Solid Waste Management",
      email: "mcd-ithelpdesk@mcd.nic.in",
      phone: "155305",
      whatsapp: null,
      portal: "https://mcdonline.nic.in",
      portalName: "MCD Portal",
      address: "Town Hall, Chandni Chowk, New Delhi 110006"
    },
    encroachment: {
      department: "MCD Enforcement",
      email: "mcd-ithelpdesk@mcd.nic.in",
      phone: "155305",
      whatsapp: null,
      portal: "https://mcdonline.nic.in",
      portalName: "MCD Portal",
      address: "Town Hall, Chandni Chowk, New Delhi 110006"
    }
  },

  chennai: {
    pothole: {
      department: "Greater Chennai Corporation (GCC)",
      email: null,
      phone: "1913",
      whatsapp: null,
      portal: "https://gccservices.chennaicorporation.gov.in/pgr",
      portalName: "GCC Grievance Portal",
      address: "Ripon Building, EVR Salai, Chennai 600003"
    },
    streetlight: {
      department: "Greater Chennai Corporation (GCC)",
      email: null,
      phone: "1913",
      whatsapp: null,
      portal: "https://gccservices.chennaicorporation.gov.in/pgr",
      portalName: "GCC Grievance Portal",
      address: "Ripon Building, EVR Salai, Chennai 600003"
    },
    water: {
      department: "CMWSSB Chennai",
      email: "cmwssb@tn.gov.in",
      phone: "1916",
      whatsapp: null,
      portal: "https://cmwssb.tn.gov.in",
      portalName: "CMWSSB Portal",
      address: "No.1, Pumping Station Road, Chintadripet, Chennai 600002"
    },
    garbage: {
      department: "Greater Chennai Corporation (GCC)",
      email: null,
      phone: "1913",
      whatsapp: null,
      portal: "https://gccservices.chennaicorporation.gov.in/pgr",
      portalName: "GCC Grievance Portal",
      address: "Ripon Building, EVR Salai, Chennai 600003"
    },
    encroachment: {
      department: "Greater Chennai Corporation (GCC)",
      email: null,
      phone: "1913",
      whatsapp: null,
      portal: "https://gccservices.chennaicorporation.gov.in/pgr",
      portalName: "GCC Grievance Portal",
      address: "Ripon Building, EVR Salai, Chennai 600003"
    }
  },

  hyderabad: {
    pothole: {
      department: "GHMC Engineering Department",
      email: "commissioner@ghmc.gov.in",
      phone: "21111111",
      whatsapp: "919848021665",
      portal: "https://www.ghmc.gov.in",
      portalName: "GHMC Portal",
      address: "CC Complex, Tank Bund Road, Hyderabad 500063"
    },
    streetlight: {
      department: "GHMC Electricals Department",
      email: "commissioner@ghmc.gov.in",
      phone: "21111111",
      whatsapp: "919848021665",
      portal: "https://www.ghmc.gov.in",
      portalName: "GHMC Portal",
      address: "CC Complex, Tank Bund Road, Hyderabad 500063"
    },
    water: {
      department: "HMWSSB Hyderabad",
      email: null,
      phone: "1916",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "Khairathabad, Hyderabad 500004"
    },
    garbage: {
      department: "GHMC Health & Sanitation",
      email: "commissioner@ghmc.gov.in",
      phone: "21111111",
      whatsapp: "919848021665",
      portal: "https://www.ghmc.gov.in",
      portalName: "GHMC Portal",
      address: "CC Complex, Tank Bund Road, Hyderabad 500063"
    },
    encroachment: {
      department: "GHMC Enforcement",
      email: "commissioner@ghmc.gov.in",
      phone: "21111111",
      whatsapp: "919848021665",
      portal: "https://www.ghmc.gov.in",
      portalName: "GHMC Portal",
      address: "CC Complex, Tank Bund Road, Hyderabad 500063"
    }
  },

  kolkata: {
    pothole: {
      department: "KMC Roads Department",
      email: "callcentre@kmcgov.in",
      phone: "155360",
      whatsapp: "918335988888",
      portal: "https://www.kmcgov.in",
      portalName: "KMC Portal",
      address: "5, S.N. Banerjee Road, Kolkata 700013"
    },
    streetlight: {
      department: "KMC Lighting Department",
      email: "callcentre@kmcgov.in",
      phone: "155360",
      whatsapp: null,
      portal: "https://www.kmcgov.in",
      portalName: "KMC Portal",
      address: "5, S.N. Banerjee Road, Kolkata 700013"
    },
    water: {
      department: "KMC Water Supply Department",
      email: "water.supply@kmcgov.in",
      phone: "155360",
      whatsapp: null,
      portal: "https://www.kmcgov.in",
      portalName: "KMC Portal",
      address: "5, S.N. Banerjee Road, Kolkata 700013"
    },
    garbage: {
      department: "KMC Solid Waste Management",
      email: "callcentre@kmcgov.in",
      phone: "155360",
      whatsapp: "918335988888",
      portal: "https://www.kmcgov.in",
      portalName: "KMC Portal",
      address: "5, S.N. Banerjee Road, Kolkata 700013"
    },
    encroachment: {
      department: "KMC Buildings & Land Enforcement",
      email: "callcentre@kmcgov.in",
      phone: "155360",
      whatsapp: null,
      portal: "https://www.kmcgov.in",
      portalName: "KMC Portal",
      address: "5, S.N. Banerjee Road, Kolkata 700013"
    }
  },

  pune: {
    pothole: {
      department: "PMC Road Department",
      email: "feedback@punecorporation.org",
      phone: "1533",
      whatsapp: null,
      portal: "https://www.punecorporation.org",
      portalName: "PMC Care Portal",
      address: "Shivaji Nagar, Pune 411005"
    },
    streetlight: {
      department: "MSEDCL Pune / PMC Electricals",
      email: "customercare@mahadiscom.in",
      phone: "1912",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS",
      address: "Shivaji Nagar, Pune 411005"
    },
    water: {
      department: "PMC Water Supply",
      email: "feedback@punecorporation.org",
      phone: "1533",
      whatsapp: null,
      portal: "https://www.punecorporation.org",
      portalName: "PMC Care Portal",
      address: "Shivaji Nagar, Pune 411005"
    },
    garbage: {
      department: "PMC Solid Waste Management",
      email: "swm@punecorporation.org",
      phone: "1533",
      whatsapp: null,
      portal: "https://www.punecorporation.org",
      portalName: "PMC Care Portal",
      address: "Shivaji Nagar, Pune 411005"
    },
    encroachment: {
      department: "PMC Encroachment Department",
      email: "feedback@punecorporation.org",
      phone: "1533",
      whatsapp: null,
      portal: "https://www.punecorporation.org",
      portalName: "PMC Care Portal",
      address: "Shivaji Nagar, Pune 411005"
    }
  },

  ahmedabad: {
    pothole: {
      department: "AMC Engineering Department",
      email: "ccrs@ahmedabadcity.gov.in",
      phone: "155303",
      whatsapp: "917567855303",
      portal: "https://www.ahmedabadcity.gov.in",
      portalName: "AMC CCRS Portal",
      address: "Mahanagar Seva Sadan, Danapapith, Ahmedabad 380001"
    },
    streetlight: {
      department: "AMC Light Department",
      email: "ccrs@ahmedabadcity.gov.in",
      phone: "155303",
      whatsapp: null,
      portal: "https://www.ahmedabadcity.gov.in",
      portalName: "AMC CCRS Portal",
      address: "Danapapith, Ahmedabad 380001"
    },
    water: {
      department: "AMC Water Resources Department",
      email: "helpdesk@amc.gov.in",
      phone: "155303",
      whatsapp: null,
      portal: "https://www.ahmedabadcity.gov.in",
      portalName: "AMC CCRS Portal",
      address: "Danapapith, Ahmedabad 380001"
    },
    garbage: {
      department: "AMC Solid Waste Management",
      email: "swm@ahmedabadcity.gov.in",
      phone: "155303",
      whatsapp: "917567855303",
      portal: "https://www.ahmedabadcity.gov.in",
      portalName: "AMC CCRS Portal",
      address: "Danapapith, Ahmedabad 380001"
    },
    encroachment: {
      department: "AMC Estate & Encroachment Department",
      email: "ccrs@ahmedabadcity.gov.in",
      phone: "155303",
      whatsapp: null,
      portal: "https://www.ahmedabadcity.gov.in",
      portalName: "AMC CCRS Portal",
      address: "Danapapith, Ahmedabad 380001"
    }
  },

  jaipur: {
    pothole: {
      department: "JMC Greater Engineering / PWD",
      email: "commissioner.jmc@rajasthan.gov.in",
      phone: "18005728545",
      whatsapp: null,
      portal: "http://sampark.rajasthan.gov.in",
      portalName: "Rajasthan Sampark",
      address: "Pandit Deendayal Upadhyay Bhawan, Lal Kothi, Jaipur 302015"
    },
    streetlight: {
      department: "JVVNL Jaipur / JMC Electrical",
      email: "commissioner.jmc@rajasthan.gov.in",
      phone: "1912",
      whatsapp: null,
      portal: "http://sampark.rajasthan.gov.in",
      portalName: "Rajasthan Sampark",
      address: "Lal Kothi, Jaipur 302015"
    },
    water: {
      department: "PHED Rajasthan",
      email: "phed.rajasthan@gmail.com",
      phone: "18001806127",
      whatsapp: null,
      portal: "http://sampark.rajasthan.gov.in",
      portalName: "Rajasthan Sampark",
      address: "Jal Bhawan, Jaipur 302006"
    },
    garbage: {
      department: "JMC Solid Waste Management",
      email: "commissioner.jmc@rajasthan.gov.in",
      phone: "18005728545",
      whatsapp: null,
      portal: "http://sampark.rajasthan.gov.in",
      portalName: "Rajasthan Sampark",
      address: "Lal Kothi, Jaipur 302015"
    },
    encroachment: {
      department: "JMC Enforcement",
      email: "commissioner.jmc@rajasthan.gov.in",
      phone: "18005728545",
      whatsapp: null,
      portal: "http://sampark.rajasthan.gov.in",
      portalName: "Rajasthan Sampark",
      address: "Lal Kothi, Jaipur 302015"
    }
  },

  lucknow: {
    pothole: {
      department: "LMC Engineering Department",
      email: "nnlko@nic.in",
      phone: "1533",
      whatsapp: "919219902911",
      portal: "https://lmc.up.nic.in",
      portalName: "Lucknow 311 Portal",
      address: "Triloknath Road, Lalbagh, Lucknow 226001"
    },
    streetlight: {
      department: "LESA / LMC Lighting",
      email: "nnlko@nic.in",
      phone: "1912",
      whatsapp: null,
      portal: "https://lmc.up.nic.in",
      portalName: "Lucknow 311 Portal",
      address: "Lalbagh, Lucknow 226001"
    },
    water: {
      department: "UP Jal Nigam / Jalkal Vibhag",
      email: "nnlko@nic.in",
      phone: "1533",
      whatsapp: null,
      portal: "https://lmc.up.nic.in",
      portalName: "Lucknow 311 Portal",
      address: "Lalbagh, Lucknow 226001"
    },
    garbage: {
      department: "LMC Solid Waste Management",
      email: "nnlko@nic.in",
      phone: "1533",
      whatsapp: "919219902911",
      portal: "https://lmc.up.nic.in",
      portalName: "Lucknow 311 Portal",
      address: "Lalbagh, Lucknow 226001"
    },
    encroachment: {
      department: "LMC Enforcement Department",
      email: "nnlko@nic.in",
      phone: "1533",
      whatsapp: null,
      portal: "https://lmc.up.nic.in",
      portalName: "Lucknow 311 Portal",
      address: "Lalbagh, Lucknow 226001"
    }
  },

  default: {
    pothole: {
      department: "Municipal Corporation Roads Branch",
      email: null,
      phone: "1533",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS — Universal Portal",
      address: "Local Municipal Corporation Office"
    },
    streetlight: {
      department: "State Electricity Board",
      email: null,
      phone: "1912",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS — Universal Portal",
      address: "Local Electricity Board Office"
    },
    water: {
      department: "Water Supply Board",
      email: null,
      phone: "1916",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS — Universal Portal",
      address: "Local Water Supply Department"
    },
    garbage: {
      department: "Municipal Corporation SWM Branch",
      email: null,
      phone: "1533",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS — Universal Portal",
      address: "Local Municipal Corporation Office"
    },
    encroachment: {
      department: "Municipal Corporation Enforcement Branch",
      email: null,
      phone: "1533",
      whatsapp: null,
      portal: "https://pgportal.gov.in",
      portalName: "CPGRAMS — Universal Portal",
      address: "Local Municipal Corporation Office"
    }
  }
};

export function getContact(city: string, issueType: string): ContactDetails {
  const cityKey = (city || '').toLowerCase().trim();
  const issueKey = (issueType || '').toLowerCase().trim();
  
  const cityGroup = DEPARTMENT_CONTACTS[cityKey] || DEPARTMENT_CONTACTS.default;
  return (
    cityGroup[issueKey] ||
    DEPARTMENT_CONTACTS.default[issueKey] ||
    DEPARTMENT_CONTACTS.default.pothole
  );
}
