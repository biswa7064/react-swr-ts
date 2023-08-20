import React, { FC, ReactNode } from "react"
import { SWRConfig } from "swr"

const SwrConfigWrapper: FC<{ children: ReactNode; fetcher: any }> = ({
  children,
  fetcher,
}) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnMount: true,
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SwrConfigWrapper
