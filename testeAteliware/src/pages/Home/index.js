/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unreachable */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import moment from "moment";
import api from "../../services/api";
import logo from "../../assets/logo.png";
import { Container, Form } from "./style";
import CompareList from "../../components/CompareList/index";

export default class Home extends Component {
  state = {
    loading: false,
    entradaRepositorios: "",
    repositorios: [],
    repositoryErro: false
  };

  adicionaRepositorio = async event => {
    this.setState({ loading: true });
    event.preventDefault();

    try {
      const { data: repositorio } = await api.get(
        `${this.state.entradaRepositorios}`
      );

      repositorio.LastCommit = moment(repositorio.pushed_at).fromNow();

      this.setState({
        repositorios: [...this.state.repositorios, repositorio],
        entradaRepositorios: "",
        repositoryErro: false
      });
    } catch (err) {
      this.setState({ repositoryErro: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="Comparador de Repositórios Repositórios" />
        <Form
          withError={this.state.repositoryErro}
          onSubmit={this.adicionaRepositorio}
        >
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.entradaRepositorios}
            onChange={event =>
              this.setState({ entradaRepositorios: event.target.value })
            }
          />
          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              "OK"
            )}
          </button>
        </Form>
        <CompareList repositorios={this.state.repositorios} />
      </Container>
    );
  }
}
