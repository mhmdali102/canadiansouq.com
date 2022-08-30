
interface Props {
  fill?: string;
}

export const AddtoCart = ({fill}: Props) => (
  <svg width="24" height="24" viewBox="0 0 15 15" fill="none">
    <path
      d="M9 4.5C9 4.36739 8.94732 4.24021 8.85355 4.14645C8.75979 4.05268 8.63261 4 8.5 4C8.36739 4 8.24021 4.05268 8.14645 4.14645C8.05268 4.24021 8 4.36739 8 4.5V6H6.5C6.36739 6 6.24021 6.05268 6.14645 6.14645C6.05268 6.24021 6 6.36739 6 6.5C6 6.63261 6.05268 6.75979 6.14645 6.85355C6.24021 6.94732 6.36739 7 6.5 7H8V8.5C8 8.63261 8.05268 8.75979 8.14645 8.85355C8.24021 8.94732 8.36739 9 8.5 9C8.63261 9 8.75979 8.94732 8.85355 8.85355C8.94732 8.75979 9 8.63261 9 8.5V7H10.5C10.6326 7 10.7598 6.94732 10.8536 6.85355C10.9473 6.75979 11 6.63261 11 6.5C11 6.36739 10.9473 6.24021 10.8536 6.14645C10.7598 6.05268 10.6326 6 10.5 6H9V4.5Z"
      fill={fill || "#242424"}
    />
    <path
      d="M0.5 0C0.367392 0 0.240215 0.0526784 0.146447 0.146447C0.0526784 0.240215 0 0.367392 0 0.5C0 0.632608 0.0526784 0.759785 0.146447 0.853553C0.240215 0.947322 0.367392 1 0.5 1H1.61L2.011 2.607L3.509 10.592C3.53045 10.7066 3.59126 10.8101 3.68091 10.8846C3.77057 10.9591 3.88343 10.9999 4 11H5C4.46957 11 3.96086 11.2107 3.58579 11.5858C3.21071 11.9609 3 12.4696 3 13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15C5.53043 15 6.03914 14.7893 6.41421 14.4142C6.78929 14.0391 7 13.5304 7 13C7 12.4696 6.78929 11.9609 6.41421 11.5858C6.03914 11.2107 5.53043 11 5 11H12C11.4696 11 10.9609 11.2107 10.5858 11.5858C10.2107 11.9609 10 12.4696 10 13C10 13.5304 10.2107 14.0391 10.5858 14.4142C10.9609 14.7893 11.4696 15 12 15C12.5304 15 13.0391 14.7893 13.4142 14.4142C13.7893 14.0391 14 13.5304 14 13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11H13C13.1166 10.9999 13.2294 10.9591 13.3191 10.8846C13.4087 10.8101 13.4696 10.7066 13.491 10.592L14.991 2.592C15.0045 2.51984 15.002 2.44558 14.9835 2.37452C14.9651 2.30345 14.9313 2.23731 14.8844 2.1808C14.8375 2.12429 14.7788 2.0788 14.7124 2.04755C14.6459 2.0163 14.5734 2.00007 14.5 2H2.89L2.485 0.379C2.45801 0.270784 2.39561 0.174699 2.30773 0.106025C2.21985 0.0373507 2.11153 3.08115e-05 2 0H0.5ZM4.415 10L3.102 3H13.898L12.585 10H4.415V10ZM6 13C6 13.2652 5.89464 13.5196 5.70711 13.7071C5.51957 13.8946 5.26522 14 5 14C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13C4 12.7348 4.10536 12.4804 4.29289 12.2929C4.48043 12.1054 4.73478 12 5 12C5.26522 12 5.51957 12.1054 5.70711 12.2929C5.89464 12.4804 6 12.7348 6 13V13ZM13 13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2652 12 12.5196 12.1054 12.7071 12.2929C12.8946 12.4804 13 12.7348 13 13V13Z"
      fill={fill || "#242424"}
    />
  </svg>
)
