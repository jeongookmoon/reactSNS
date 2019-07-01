import React from "react"
import Head from "next/head"
import AppLayout from "../components/AppLayout"
import PropTypes from "prop-types"
// Provider provides states to React
import { Provider } from "react-redux"
import { createStore, compose, applyMiddleware } from "redux"
import reducer from "../reducers"
// to provide store state to ReactSNS
import withRedux from "next-redux-wrapper"
import sagaMiddleware from "../sagas/middleware"
import rootSaga from "../sagas"

// using Next's component as prop, use other page as a child
const ReactSNS = ({ Component, store }) => {
  return (
    // since Provider is root, all children components can receive store state
    // store contains all the reducers
    <Provider store={store}>
      <Head>
        <title>React SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.js" />
      </Head>
      <AppLayout >
        <Component />
      </AppLayout>
    </Provider>
  )
}

ReactSNS.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object
}

// wrap ReactSNS to provide store states
export default withRedux((initialState, options) => {
  const middlewares = [sagaMiddleware]
  // to use Redux devtools on browser add the extension to middleware
  const enhancer = process.env.NODE_ENV === "production" ?
    compose(applyMiddleware(...middlewares))
    :
    compose(applyMiddleware(...middlewares),
      // can be typeof window !== "undefined"
      !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION !== "undefined" ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
  const store = createStore(reducer, initialState, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
})(ReactSNS)
