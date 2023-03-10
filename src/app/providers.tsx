import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import React, { Suspense } from 'react'
import theme from './styles/theme'
import { Provider } from 'react-redux'
import { store } from 'entities/redux/store'
import ErrorBoundary from 'entities/ErrorBoundary/ErrorBoundary'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={''}>
      <ErrorBoundary>
        <Provider store={store}>
          <CacheProvider>
            <ChakraProvider>
              <ColorModeScript
                initialColorMode={theme.config.initialColorMode}
              />
              {children}
            </ChakraProvider>
          </CacheProvider>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  )
}
export default Providers
