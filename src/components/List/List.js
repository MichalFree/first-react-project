import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    children: PropTypes.node,
  }
  static defaultProps = {
    children: <p>Interesting things i want to checkout!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero
          titleText={this.props.title}
          imageHero={this.props.image}
        />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={'Animals'} />
          <Column columnTitle={'Plants'} />
          <Column columnTitle={'Minerals'} />
        </div>
      </section>
    )
  }
}

export default List;
