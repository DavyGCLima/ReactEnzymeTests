import { runSaga } from 'redux-saga';
import { Creators as RepositoriesActions } from '../../store/ducks/repositories';
import { getRepositories } from '../../store/sagas/repositories';
import expectExport from 'expect';
import MockAdapter from 'axios-mock-adapter'
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Repositories Saga', () => {
    it('shold be able to fetch repositories', async () => {
        const dispatched = [];

        apiMock.onGet('/users/diego3g/repos').reply(200, ['some data']);

        await runSaga(
            {
                dispatch: action => {
                    dispatched.push(action);
                }
            },
            getRepositories
        ).toPromise();

        expectExport(dispatched).toContainEqual(RepositoriesActions.getSuccess(['some data']));
    });

});
