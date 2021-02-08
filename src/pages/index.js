import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    description: 'Launch databases like MySQL, PostgreSQL, MongoDB and apps like VSCode, PhpMyAdmin, PgAdmin in just few seconds.',
    imageUrl: `/img/rocket.svg`,
    title: 'One click Installation',
  },
  {
    description: 'Fancy learning a new language like GoLang, Python or Rust you can save yourself from the trouble of setting up the toolchain in seconds using Envase.',
    imageUrl: `/img/code.svg`,
    title: 'Learn new Languages',
  },
  {
    description: 'Run fullstack apps like Hasura, Wordpress, Joomla with ease and confidence. Envase creates and connects multiple containers over a common network without you ever having to think about it',
    imageUrl: `/img/containers.svg`,
    title: 'Fullstack Apps',
  },
]

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Envase removes the pain of running apps using docker by providing an amazing developer experience and an one stop shop app store for almost all popular applications.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
