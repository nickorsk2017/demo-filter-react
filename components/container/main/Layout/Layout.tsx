import styles from './Layout.module.css';

export function Layout(Component) {
    function WrappedComponent(props) {
      return (
        <div className={styles.container}>
            <Component {...props} />
        </div>
      );
    }
      
    return WrappedComponent;
}