// Single source of truth for external assets.
const ASSET_BASE = 'https://raw.githubusercontent.com/adityakatyayan/PortfolioV3/main';

export const assets = {
  profile: `${ASSET_BASE}/MyPhoto.jpg`,

  logos: {
    sherpaIT_HL: `${ASSET_BASE}/HLPOS_logo.png`,
    sherpaIT_ImPOS: `${ASSET_BASE}/ImPOS_logo.png`,
    ltiMindtree: `${ASSET_BASE}/LTIM_logo.png`,
    revolut: `${ASSET_BASE}/Revolut-Logo-500x281.png`,
    trigent: `${ASSET_BASE}/Trigent_logo.png`,
    imu: `${ASSET_BASE}/Indian_Maritime_University_logo.jpg`,
    az900: `${ASSET_BASE}/AZ900_logo.png`,
  },

  certificates: {
    az900: {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      image: `${ASSET_BASE}/AZ900.jpg`,
      verifyUrl:
        'https://learn.microsoft.com/api/credentials/share/en-in/AdityaKatyayan-7112/6415220D2A3523BD?sharingId=7B059242ABE75617',
    },
    genAI: {
      title: 'Generative AI Foundation Course',
      issuer: 'LTIMindtree',
      image: `${ASSET_BASE}/GenAI.jpg`,
      verifyUrl:
        'https://www.linkedin.com/learning/certificates/8cb47e746462449738d5bb3696d632a26d594dd73e714a5a284964cb50721cb9',
    },
    careerEssentialsGenAI: {
      title: 'Career Essentials in Generative AI by Microsoft and LinkedIn',
      issuer: 'LinkedIn Learning',
      image: `${ASSET_BASE}/HVSG.png`,
      verifyUrl:
        'https://www.linkedin.com/learning/certificates/c4324365dfd23659151316f5d993dfdd087460f3999578fc58f2451e2503c82a',
    },
    ethicsGenAI: {
      title: 'Ethics in the Age of Generative AI',
      issuer: 'LinkedIn Learning',
      image: `${ASSET_BASE}/OCTC.png`,
      verifyUrl:
        'https://www.linkedin.com/learning/certificates/9bd0c08a051c8e16c8383d143210a0466baea08e8f6f97a9f193716bd763c398',
    },
    learningCopilot: {
      title: 'Learning Microsoft 365 Copilot',
      issuer: 'LinkedIn Learning',
      image: `${ASSET_BASE}/OTCT.png`,
      verifyUrl:
        'https://www.linkedin.com/learning/certificates/63e36b67574578c1d05a691d99b78949e1ae5b57222ea5f7c36a32d37b6e436e',
    },
    genAISearch: {
      title: 'Generative AI: The Evolution of Thoughtful Online Search',
      issuer: 'LinkedIn Learning',
      image: `${ASSET_BASE}/PFEP.png`,
      verifyUrl:
        'https://www.linkedin.com/learning/certificates/c59b014c2cd66e4bc6ac7eec45046323dd3fc0fff4cbb299c057a5f1a4ac6b5f',
    },
    streamliningCopilot: {
      title: 'Streamlining Your Work with Microsoft Copilot',
      issuer: 'LinkedIn Learning',
      image: `${ASSET_BASE}/PRESEA.png`,
      verifyUrl:
        'https://www.linkedin.com/learning/certificates/8c050b921a3c5e5d73e0f8811cbb850f8edfd623f8b1a8a8fc26d6ecabf6b363',
    },
    whatIsGenAI: {
      title: 'What Is Generative AI?',
      issuer: 'LinkedIn Learning',
      image: `${ASSET_BASE}/STSD.png`,
      verifyUrl:
        'https://www.linkedin.com/learning/certificates/412ef2b8176def45a07d65fe0fdf2caec6ce0f418d47000c060092959d3f44b1',
    },
    excelEssential: {
      title: 'Excel Essential Training',
      issuer: 'Udemy',
      image: `${ASSET_BASE}/UC-a4daddd8-3437-437e-92de-b28ac39d3aac.jpg`,
      verifyUrl: 'https://www.udemy.com/certificate/UC-a4daddd8-3437-437e-92de-b28ac39d3aac/',
    },
    efset: {
      title: 'EF SET English Certificate',
      issuer: 'EF Standard English Test',
      image: '',
      verifyUrl: 'https://cert.efset.org/vec2qb',
    },
    disaster: {
      title: 'Disaster Management and First Aid',
      issuer: 'Indian Maritime University',
      image: `${ASSET_BASE}/Disaster%20Managerment%20and%20First%20Aid.png`,
      verifyUrl: '',
    },
  },

  documents: {
    btechDegree: `${ASSET_BASE}/BTech_Degree.png`,
    matric: `${ASSET_BASE}/10th_Marksheet.png`,
    intermediate: `${ASSET_BASE}/12th_Marksheet.png`,
  },
};
