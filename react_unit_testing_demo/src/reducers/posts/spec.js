import { types } from '../../actions/types';
import postReducer from './reducer';

describe('Post Reducer', () => {
  test('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  test('Should return new state if receive type', () => {
    const posts = [{ title: 'test1' }, { title: 'test2' }, { title: 'test3' }];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });
    expect(newState).toEqual(posts);
  });
});
