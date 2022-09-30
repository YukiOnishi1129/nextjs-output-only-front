/**
 * TodoDetailTemplate
 *
 * @package components
 */
import { useRouter } from 'next/router';
import { useTodoContext } from '@/contexts/TodoContext';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { InputForm } from '@/components/atoms/InputForm';
import { TextArea } from '@/components/atoms/TextArea';
import styles from './styles.module.css';

/**
 * TodoDetailTemplate
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoDetailTemplate = () => {
  const { originTodoList } = useTodoContext();
  const router = useRouter();
  const todo = originTodoList.find((todo) => String(todo.id) === router?.query?.id);

  return (
    <BaseLayout title={'TodoDetail'}>
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm disabled value={todo.title} placeholder={'Title'} />
          </div>
          <div className={styles.area}>
            <TextArea disabled value={todo.content} placeholder={'Content'} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
