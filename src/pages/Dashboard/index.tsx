import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input type="text " placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/28759636?s=460&u=568574029634f6dccb723a6e8c0e868b9b02d8ae&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rafaelsouz/aircnc</strong>
            <p>blablabla</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/28759636?s=460&u=568574029634f6dccb723a6e8c0e868b9b02d8ae&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rafaelsouz/aircnc</strong>
            <p>blablabla</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/28759636?s=460&u=568574029634f6dccb723a6e8c0e868b9b02d8ae&v=4"
            alt="Avatar"
          />
          <div>
            <strong>rafaelsouz/aircnc</strong>
            <p>blablabla</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
