import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log(' Starting seed...');

  // Clear existing data
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.education.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  // Create dummy users with profiles
  const hashedPassword = await bcrypt.hash('password123', 10);

  const users = [
    {
      email: 'john.doe@example.com',
      password: hashedPassword,
      profile: {
        name: 'John Doe',
        headline: 'Senior Software Engineer at Google',
        location: 'San Francisco, CA',
        about: 'Experienced software engineer with 10+ years in full-stack development. Passionate about building scalable web applications and mentoring junior developers.',
        photoUrl: 'https://i.pravatar.cc/150?img=1',
        experiences: [
          {
            title: 'Senior Software Engineer',
            company: 'Google',
            location: 'Mountain View, CA',
            startDate: new Date('2020-01-15'),
            current: true,
            description: 'Leading development of cloud infrastructure services. Mentoring junior engineers and contributing to open-source projects.',
          },
          {
            title: 'Software Engineer',
            company: 'Facebook',
            location: 'Menlo Park, CA',
            startDate: new Date('2017-06-01'),
            endDate: new Date('2019-12-31'),
            current: false,
            description: 'Developed and maintained React-based web applications. Worked on performance optimization and user experience improvements.',
          },
        ],
        educations: [
          {
            school: 'Stanford University',
            degree: 'Master of Science',
            field: 'Computer Science',
            startDate: new Date('2015-09-01'),
            endDate: new Date('2017-06-01'),
            current: false,
            description: 'Specialized in Machine Learning and Distributed Systems. Thesis on scalable microservices architecture.',
          },
          {
            school: 'UC Berkeley',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: new Date('2011-09-01'),
            endDate: new Date('2015-05-01'),
            current: false,
          },
        ],
        skills: [
          { name: 'JavaScript' },
          { name: 'TypeScript' },
          { name: 'React' },
          { name: 'Node.js' },
          { name: 'Python' },
          { name: 'AWS' },
        ],
      },
    },
    {
      email: 'jane.smith@example.com',
      password: hashedPassword,
      profile: {
        name: 'Jane Smith',
        headline: 'Product Manager at Microsoft',
        location: 'Seattle, WA',
        about: 'Strategic product manager with expertise in B2B SaaS products. Successfully launched 5+ products with 100M+ users combined.',
        photoUrl: 'https://i.pravatar.cc/150?img=5',
        experiences: [
          {
            title: 'Product Manager',
            company: 'Microsoft',
            location: 'Seattle, WA',
            startDate: new Date('2019-03-01'),
            current: true,
            description: 'Leading product strategy for Azure DevOps. Managing cross-functional teams and driving product roadmap.',
          },
          {
            title: 'Associate Product Manager',
            company: 'Amazon',
            location: 'Seattle, WA',
            startDate: new Date('2017-07-01'),
            endDate: new Date('2019-02-28'),
            current: false,
            description: 'Managed e-commerce features and analytics. Improved conversion rates by 25% through data-driven decisions.',
          },
        ],
        educations: [
          {
            school: 'MIT',
            degree: 'Master of Business Administration',
            field: 'Technology Management',
            startDate: new Date('2015-09-01'),
            endDate: new Date('2017-05-01'),
            current: false,
          },
          {
            school: 'Harvard University',
            degree: 'Bachelor of Arts',
            field: 'Economics',
            startDate: new Date('2011-09-01'),
            endDate: new Date('2015-05-01'),
            current: false,
          },
        ],
        skills: [
          { name: 'Product Strategy' },
          { name: 'Agile' },
          { name: 'Data Analysis' },
          { name: 'SQL' },
          { name: 'Tableau' },
          { name: 'Stakeholder Management' },
        ],
      },
    },
    {
      email: 'mike.johnson@example.com',
      password: hashedPassword,
      profile: {
        name: 'Mike Johnson',
        headline: 'Full-Stack Developer at Netflix',
        location: 'Los Gatos, CA',
        about: 'Creative full-stack developer specializing in video streaming platforms. Love building user-friendly interfaces and optimizing performance.',
        photoUrl: 'https://i.pravatar.cc/150?img=12',
        experiences: [
          {
            title: 'Full-Stack Developer',
            company: 'Netflix',
            location: 'Los Gatos, CA',
            startDate: new Date('2021-01-15'),
            current: true,
            description: 'Building next-generation streaming interfaces. Working with React, Node.js, and microservices architecture.',
          },
          {
            title: 'Frontend Developer',
            company: 'Spotify',
            location: 'New York, NY',
            startDate: new Date('2018-06-01'),
            endDate: new Date('2020-12-31'),
            current: false,
            description: 'Developed music player interfaces and recommendation features. Improved user engagement by 30%.',
          },
        ],
        educations: [
          {
            school: 'University of Washington',
            degree: 'Bachelor of Science',
            field: 'Software Engineering',
            startDate: new Date('2014-09-01'),
            endDate: new Date('2018-05-01'),
            current: false,
          },
        ],
        skills: [
          { name: 'React' },
          { name: 'Vue.js' },
          { name: 'Node.js' },
          { name: 'MongoDB' },
          { name: 'GraphQL' },
          { name: 'Docker' },
        ],
      },
    },
    {
      email: 'sarah.williams@example.com',
      password: hashedPassword,
      profile: {
        name: 'Sarah Williams',
        headline: 'Data Scientist at Tesla',
        location: 'Palo Alto, CA',
        about: 'Data scientist passionate about machine learning and autonomous vehicles. Published 10+ research papers in top conferences.',
        photoUrl: 'https://i.pravatar.cc/150?img=9',
        experiences: [
          {
            title: 'Senior Data Scientist',
            company: 'Tesla',
            location: 'Palo Alto, CA',
            startDate: new Date('2020-08-01'),
            current: true,
            description: 'Developing ML models for autonomous driving. Working on computer vision and sensor fusion algorithms.',
          },
          {
            title: 'Data Scientist',
            company: 'Uber',
            location: 'San Francisco, CA',
            startDate: new Date('2018-03-01'),
            endDate: new Date('2020-07-31'),
            current: false,
            description: 'Built predictive models for ride pricing and demand forecasting. Improved revenue by 15%.',
          },
        ],
        educations: [
          {
            school: 'Carnegie Mellon University',
            degree: 'PhD',
            field: 'Machine Learning',
            startDate: new Date('2013-09-01'),
            endDate: new Date('2018-05-01'),
            current: false,
            description: 'Research focused on deep learning and computer vision for autonomous systems.',
          },
        ],
        skills: [
          { name: 'Python' },
          { name: 'TensorFlow' },
          { name: 'PyTorch' },
          { name: 'R' },
          { name: 'SQL' },
          { name: 'Machine Learning' },
        ],
      },
    },
    {
      email: 'david.brown@example.com',
      password: hashedPassword,
      profile: {
        name: 'David Brown',
        headline: 'DevOps Engineer at AWS',
        location: 'Austin, TX',
        about: 'DevOps engineer with expertise in cloud infrastructure and CI/CD pipelines. Certified AWS Solutions Architect.',
        photoUrl: 'https://i.pravatar.cc/150?img=15',
        experiences: [
          {
            title: 'Senior DevOps Engineer',
            company: 'Amazon Web Services',
            location: 'Austin, TX',
            startDate: new Date('2019-05-01'),
            current: true,
            description: 'Designing and maintaining cloud infrastructure for enterprise clients. Implementing CI/CD pipelines and monitoring solutions.',
          },
          {
            title: 'DevOps Engineer',
            company: 'IBM',
            location: 'Austin, TX',
            startDate: new Date('2017-01-01'),
            endDate: new Date('2019-04-30'),
            current: false,
            description: 'Managed Kubernetes clusters and containerized applications. Improved deployment speed by 50%.',
          },
        ],
        educations: [
          {
            school: 'Texas A&M University',
            degree: 'Bachelor of Science',
            field: 'Computer Engineering',
            startDate: new Date('2013-09-01'),
            endDate: new Date('2016-12-01'),
            current: false,
          },
        ],
        skills: [
          { name: 'AWS' },
          { name: 'Kubernetes' },
          { name: 'Docker' },
          { name: 'Terraform' },
          { name: 'Jenkins' },
          { name: 'Linux' },
        ],
      },
    },
    {
      email: 'emily.davis@example.com',
      password: hashedPassword,
      profile: {
        name: 'Emily Davis',
        headline: 'UX/UI Designer at Apple',
        location: 'Cupertino, CA',
        about: 'Creative UX/UI designer with 8+ years of experience designing intuitive and beautiful user interfaces. Passionate about user-centered design and accessibility.',
        photoUrl: 'https://i.pravatar.cc/150?img=20',
        experiences: [
          {
            title: 'Senior UX/UI Designer',
            company: 'Apple',
            location: 'Cupertino, CA',
            startDate: new Date('2020-03-01'),
            current: true,
            description: 'Leading design for iOS applications and web experiences. Collaborating with engineering teams to create seamless user experiences.',
          },
          {
            title: 'UX Designer',
            company: 'Adobe',
            location: 'San Jose, CA',
            startDate: new Date('2017-06-01'),
            endDate: new Date('2020-02-28'),
            current: false,
            description: 'Designed creative tools and interfaces for Adobe Creative Cloud. Improved user workflow efficiency by 40%.',
          },
        ],
        educations: [
          {
            school: 'Art Center College of Design',
            degree: 'Bachelor of Fine Arts',
            field: 'Graphic Design',
            startDate: new Date('2013-09-01'),
            endDate: new Date('2017-05-01'),
            current: false,
            description: 'Focused on digital design, user experience, and interaction design.',
          },
        ],
        skills: [
          { name: 'Figma' },
          { name: 'Sketch' },
          { name: 'Adobe XD' },
          { name: 'User Research' },
          { name: 'Prototyping' },
          { name: 'Design Systems' },
        ],
      },
    },
  ];

  for (const userData of users) {
    const user = await prisma.user.create({
      data: {
        email: userData.email,
        password: userData.password,
        profile: {
          create: {
            name: userData.profile.name,
            headline: userData.profile.headline,
            location: userData.profile.location,
            about: userData.profile.about,
            photoUrl: userData.profile.photoUrl,
            experiences: {
              create: userData.profile.experiences,
            },
            educations: {
              create: userData.profile.educations,
            },
            skills: {
              create: userData.profile.skills,
            },
          },
        },
      },
    });
    console.log(` Created user: ${user.email}`);
  }

  console.log(' Seed completed successfully!');
  console.log('\n Test credentials:');
  console.log('   Email: john.doe@example.com');
  console.log('   Password: password123');
  console.log('   (Same password for all test users)');
}

main()
  .catch((e) => {
    console.error(' Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

