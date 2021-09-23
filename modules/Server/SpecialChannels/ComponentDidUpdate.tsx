import make_request from "@/lib/make_request";
import Loader from "@/modules/Layout/Loader";
import NewSnackbar from "@/modules/Layout/Snackbar";
import React from "react";

async function ComponentDidUpdate(that: any, prevState: any) {
  if (that.state.triggerUpdate === false) {
    return that.setState({
      triggerUpdate: true,
    });
  }

  if (prevState.selected !== that.state.selected) {
    const { session, loading } = that.props;

    that.setState({
      snackbar: <Loader />,
    });

    const role_id = that.state.selected.id;

    const jsonRes = await make_request(
      `${process.env.NEXT_PUBLIC_APP_URI}/api/${that.props.guild.id}/update/${that.props.id}?data=${role_id}`,
      {
        Authorization: session.user.accessToken,
      }
    );

    if (jsonRes.status === "error") {
      that.setState({
        snackbar: (
          <NewSnackbar message={jsonRes.message} status={jsonRes.status} />
        ),
        selected: prevState.selected,
        triggerUpdate: false,
      });
    }

    that.setState({
      snackbar: (
        <NewSnackbar message={jsonRes.message} status={jsonRes.status} />
      ),
    });
  }
}

export default ComponentDidUpdate;
